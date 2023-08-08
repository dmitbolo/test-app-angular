import { Component } from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-entries-add',
  templateUrl: './entriesadd.component.html',
  styleUrls: ['./entriesadd.component.css']
})
export class EntriesAddComponent {
  constructor(private firestore: Firestore) {
  }
  addData(f: any){
    const collectionInstance = collection(this.firestore, 'entries');
    const data={
      ...f.value,
      time: new Date()
    }
    addDoc(collectionInstance, data).then(()=>{
      console.log('Data Saved Successfully')
    })
        .catch((err)=>{
          console.log(err);
        })
  }
}
