import BScroll from 'better-scroll'
export function betters(select){
    return new BScroll(select,{
        scrollbar: true,
        click:true
    })
}