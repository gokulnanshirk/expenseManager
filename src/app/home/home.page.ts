import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  list:any

  constructor(private alertController:AlertController) {
    this.list=[
      {
        id:'jguuceeg',
        type:'income',
        title:'salary',
        amount:'100000',
        description:'My November month salary',
        date:'1-Nov-2020',
      },
      {
        id:'hdcgsvcsb',
        type:'expense',
        title:'Rent',
        amount:'10000',
        description:'My Home rent',
        date:'2-Nov-2020',
      },
      {
        id:'dckhsucyg',
        type:'expense',
        title:'Groceries',
        amount:'1000',
        description:'Groceries in shop nearby',
        date:'3-Nov-2020',
      },
      {
        id:'djcvguc',
        type:'expense',
        title:'Fuel',
        amount:'1000',
        description:'Petrol for my bike',
        date:'4-Nov-2020',
      },
    ]
  }

  async addExpense() {
    const alert = await this.alertController.create({
      header: 'New Expense!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Enter Title'
        },
        {
          name: 'amount',
          type: 'number',
          placeholder: 'Enter Amount'
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Enter Description'
        },
        // input date with min & max
        {
          name: 'date',
          type: 'date',
        },
        
        // input date without min nor max
        
      ],
      buttons: [
        {
          text: 'Save as Income',
          handler: (data) => {
            let newItem={
              id:Math.random(),
              type:'income',
              amount:data.amount,
              title:data.title,
              description:data.description,
              date:data.date
            }
            this.addExpenseToList(newItem)
            console.log('Income',newItem);
          }
        },
        {
          text: 'Save as Expense',
          handler: (data) => {
            let newItem={
              id:Math.random(),
              type:'expense',
              amount:data.amount,
              title:data.title,
              description:data.description,
              date:data.date
            }
            this.addExpenseToList(newItem)
            console.log('Expense',data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
      ]
    });
    await alert.present();
  }
  addExpenseToList(data){
    this.list.push(data)
  }
  editItem(i){
    this.editExpense(i.title,i.amount,i.description,i.date,i.id)
  }
  deleteItem(i){
    console.log(i)
  }
  async editExpense(title='',amount='',description='',date=new Date(),id) {
    const alert = await this.alertController.create({
      header: 'New Expense!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'title',
          type: 'text',
          value:title,
          placeholder: 'Enter Title'
        },
        {
          name: 'amount',
          type: 'number',
          value:amount,
          placeholder: 'Enter Amount'
        },
        {
          name: 'description',
          type: 'text',
          value:description,
          placeholder: 'Enter Description'
        },
        // input date with min & max
        {
          name: 'date',
          type: 'date',
          value:date
        },
        
        // input date without min nor max
        
      ],
      buttons: [
        {
          text: 'Save',
          handler: (data) => {
           this.list.map((item)=>{
             if(item.id == id)
             {
               item.title=data.title,
               item.amount=data.amount,
               item.description=data.description,
               item.date=data.date
             }
           })
            console.log("save",data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
      ]
    });
    await alert.present();
  }
}
