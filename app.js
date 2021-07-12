const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.thenetninja.co.uk',
            showBooks: true,
            books:[
                { title: 'name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true},
                { title: 'the way of kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false},
                { title: 'the final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
            ],
            /*title: 'The Final Empire',
            author: 'Brandon Sanderson',*/
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        /*lesson11  
        handleEvent(e, data) {
            console.log(e.type, e)
            if (data) {
              console.log(data)
            }
          },
          handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
          },*/
          togglebookisFav(book) {
            book.isFav = !book.isFav
        },
        /*lesson9
        changeTitle(title) {
            //this.title = 'Words of Radiance'
            //this.title = title
        }*/

    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
