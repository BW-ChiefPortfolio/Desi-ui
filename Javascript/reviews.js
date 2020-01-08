const reviewers = [
    {"name":"Charles, D","review":"\"Yummers! Everything was just so yummy. This was one chef made the best mouth-watering burgers I've had grace my taste buds in a long time.\""},
    {"name":"Timothy, C","review":"\"Best experience ever!\""},
    {"name":"Jackie, M","review":"\"The Chef I hired made amazing New York Style Pizza\""},
    {"name":"Chef Ramon","review":"\"I love Cooking this website has made my followers grow!\""},
    {"name":"Byron, A","review":"\"It was much better than I expected.\""},
    {"name":"Kyle, B","review":"\"My taste buds are still tingling\""},
    {"name":"Julia, C","review":"\"Everything was just so yummy. Everything I tried was bursting with flavor. This is definitely a spot I'll be frequenting.\""},
    {"name":"Chef Christopher","review":"\"They got a new customer for life!\""},
    {"name":"Michelle, C","review":"\"I stumbled on this undiscovered gem  I'm definitely coming back for more!\""},
    {"name":"Alexandria, M","review":"\"The food is simply to die for. I want to hire my chef again\""},
    {"name":"Alberto, R","review":"\"Best experience ever!\""},
    {"name":"Mary, J","review":"\"This chef made one of the best mouth-watering steaks I've had grace my taste buds in a long time!\""},

]

class Reviews{
    constructor(el) {
        this.reviews = el;
        this.reviewers = this.reviews.querySelectorAll(".reviewer");
        this.count = 0;
        setInterval(() => {
            this.reviewers.forEach((reviewer, index) => {
                let name = reviewer.querySelector(".review-name")
                let text = reviewer.querySelector(".review-text")
                name.textContent = reviewers[this.count]["name"];
                text.textContent = reviewers[this.count]["review"];
                this.count++;
            });
            
            if(this.count >= reviewers.length){
                this.count = 0;
            }
        }, 5000)
        
    }

}
const rr = new Reviews(document.querySelector(".reviews"))