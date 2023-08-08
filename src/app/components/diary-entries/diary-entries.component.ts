import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {
  collection,
  collectionData, deleteDoc,
  doc,
  Firestore,
  limit,
  orderBy,
  query
} from "@angular/fire/firestore";

@Component({
  selector: 'app-diary-entries',
  templateUrl: './diary-entries.component.html',
  styleUrls: ['./diary-entries.component.css']
})
export class DiaryEntriesComponent {
  entries!: Observable<any>;

  constructor(private firestore: Firestore) {
  }

  getData(){
    const queryInstance = query(collection(this.firestore, 'entries'), orderBy('time', "desc"), limit(10));
    this.entries = collectionData(queryInstance, {idField: 'id'});
    this.entries.subscribe(val => {
      console.log(val);
    });
  }

  deleteData(id: string){
    const docInstance = doc(this.firestore,'entries', id);
    deleteDoc(docInstance)
      .then(()=>{
        console.log('Data Deleted')
      })
  }

  ngOnInit(): void {
    this.getData();
  }

}
