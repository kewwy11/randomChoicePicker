const tagsEl = document.getElementById('tags')
const text = document.getElementById('textarea')
const btn = document.querySelector('button')

textarea.focus()

textarea.addEventListener('keyup', (ev) => {
    createTags(ev.target.value)

    if(ev.key === 'Enter'){
        setTimeout(() => {
            ev.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        higlightTag(randomTag)

        setTimeout(() => {
            unhiglightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            higlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function higlightTag(tag){
    tag.classList.add('highlight')
}

function unhiglightTag(tag){
    tag.classList.remove('highlight')
}

btn.addEventListener('click', randomSelect)