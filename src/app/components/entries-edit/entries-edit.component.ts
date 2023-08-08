import {Component} from '@angular/core';
import {doc, docData, Firestore, updateDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {IEntries} from "../../models/entries";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-entries-edit',
  templateUrl: './entries-edit.component.html',
  styleUrls: ['./entries-edit.component.css']
})
export class EntriesEditComponent {
  private entries!: Observable<any>;
  id: any;
  public updatedEntries: IEntries = {
    time: new Date(),
    str: "",
    img: ""
  };

  constructor(private firestore: Firestore, private route: ActivatedRoute) {
  }

  getDataOnId(id: string){
    const docInstance = doc(this.firestore, 'entries', id);
    this.entries = docData(docInstance);
    this.entries.subscribe(value => {
      console.log(value);
      //Записываем в updatedEntries предыдущие значения записи, для добавления их в input
      this.updatedEntries.str = value.str;
      this.updatedEntries.img = value.img;
    });
  }

  updateData(f: any){
    const docInstance = doc(this.firestore, 'entries', this.id);
    const data={
      ...f.value,
      time: new Date(),
    }
    updateDoc(docInstance, data)
      .then(()=>{
        console.log('Data Updated', data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.getDataOnId(this.id);
  }


}
