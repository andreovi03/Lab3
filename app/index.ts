import * as compnents from './components/index.js'
import datafeatured from './data/datafeatured.js'
import datajuegos1 from './data/datajuegos1.js'
import dataonlinegames from './data/dataonlinegames.js'
import datanews from './data/datanews.js'
import datanewsgames from './data/datanewsgames.js'
import datacharacters from './data/datacharacters.js'
import datadigitalsell from './data/datadigitalsell.js'
import datadigitalnew from './data/datadigitalnew.js'

import MyFeatured, {Attribute} from './components/featured/featured.js'
import MyJuegos, {Attribute1} from './components/juegos1/juegos.js'
import MyOnlinegames, {Attribute2} from './components/onlinegames/onlinegames.js'
import MyNews, {Attribute3} from './components/news/news.js'
import MyNewsgames, {Attribute4} from './components/newsgames/newsgames.js'
import MyCharacters, {Attribute5} from './components/characters/characters.js'
import MyDigitalsell, {Attribute6} from './components/digitalsell/digitalsell.js'
import MyDigitalnew, {Attribute7} from './components/digitalnew/digitalnew.js'

class AppContainer extends HTMLElement{
    featured: MyFeatured[] = []
    juegos: MyJuegos[] = []
    onlinegames: MyOnlinegames[] = []
    news: MyNews[] = []
    newsgames: MyNewsgames[] = []
    characters: MyCharacters[] = []
    digitalsell: MyDigitalsell[] = []
    digitalnew: MyDigitalnew[] = []
    

     constructor(){
        super()
        this.attachShadow({mode: 'open'})

        datafeatured.forEach((user)=>{
            const featuredCard=this.ownerDocument.createElement('my-featured') as MyFeatured
            featuredCard.setAttribute(Attribute.ttitle,user.title)
            featuredCard.setAttribute(Attribute.description,user.description)
            featuredCard.setAttribute(Attribute.buttonDesc,user.buttonDesc)
            featuredCard.setAttribute(Attribute.image,user.image)
            this.featured.push(featuredCard);
         });

         datajuegos1.forEach((user)=>{
            const juegosCard=this.ownerDocument.createElement('my-juegos') as MyJuegos
            juegosCard.setAttribute(Attribute1.description,user.description)
            juegosCard.setAttribute(Attribute1.console,user.console)
            juegosCard.setAttribute(Attribute1.image,user.image)
            this.juegos.push(juegosCard);
         });

         dataonlinegames.forEach((user)=>{
            const onlinegamesCard=this.ownerDocument.createElement('my-onlinegames') as MyOnlinegames
            onlinegamesCard.setAttribute(Attribute2.ttitle,user.title)
            onlinegamesCard.setAttribute(Attribute2.description,user.description)
            onlinegamesCard.setAttribute(Attribute2.buttonDesc,user.buttonDesc)
            onlinegamesCard.setAttribute(Attribute2.image,user.image)
            this.onlinegames.push(onlinegamesCard);
         });

         datanews.forEach((user)=>{
            const newsCard=this.ownerDocument.createElement('my-news') as MyNews
            newsCard.setAttribute(Attribute3.ttitle,user.title)
            newsCard.setAttribute(Attribute3.subtitle,user.subtitle)
            newsCard.setAttribute(Attribute3.date,user.date)
            newsCard.setAttribute(Attribute3.button,user.button)
            newsCard.setAttribute(Attribute3.image,user.image)
            this.news.push(newsCard);
         });

         datanewsgames.forEach((user)=>{
            const newsgamesCard=this.ownerDocument.createElement('my-newsgames') as MyNewsgames
            newsgamesCard.setAttribute(Attribute4.ttitle,user.title)
            newsgamesCard.setAttribute(Attribute4.date,user.date)
            newsgamesCard.setAttribute(Attribute4.button,user.button)
            newsgamesCard.setAttribute(Attribute4.image,user.image)
            this.newsgames.push(newsgamesCard);
         });

         datacharacters.forEach((user)=>{
            const charactersCard=this.ownerDocument.createElement('my-characters') as MyCharacters
            charactersCard.setAttribute(Attribute5.name,user.name)
            charactersCard.setAttribute(Attribute5.image,user.image)
            this.characters.push(charactersCard);
         });

         datadigitalsell.forEach((user)=>{
            const digitalsellCard=this.ownerDocument.createElement('my-digitalsell') as MyDigitalsell
            digitalsellCard.setAttribute(Attribute6.ttitle,user.title)
            digitalsellCard.setAttribute(Attribute6.date,user.date)
            digitalsellCard.setAttribute(Attribute6.price,user.price)
            digitalsellCard.setAttribute(Attribute6.console,user.console)
            digitalsellCard.setAttribute(Attribute6.image,user.image)
            this.digitalsell.push(digitalsellCard);
         });

         datadigitalnew.forEach((user)=>{
            const digitalnewCard=this.ownerDocument.createElement('my-digitalnews') as MyDigitalnew
            digitalnewCard.setAttribute(Attribute7.ttitle,user.title)
            digitalnewCard.setAttribute(Attribute7.date,user.date)
            digitalnewCard.setAttribute(Attribute7.description,user.description)
            digitalnewCard.setAttribute(Attribute7.price,user.price)
            digitalnewCard.setAttribute(Attribute7.console,user.console)
            digitalnewCard.setAttribute(Attribute7.image,user.image)
            this.digitalnew.push(digitalnewCard);
         });
     }

    connectedCallback(){
       this.render();
    }



    render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.featured.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.juegos.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.onlinegames.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.news.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.newsgames.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.characters.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.digitalsell.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });

      this.digitalnew.forEach((user) => {
         this.shadowRoot?.appendChild(user);
      });
   

    }

}

customElements.define("app-container", AppContainer);
