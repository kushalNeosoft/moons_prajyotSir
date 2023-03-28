
export interface ListItemProps{
    companyName:number,
    index:string,
    value:number,
    dayValue:string,
    percentage:string,
    id:number
}

export interface CarouselProps{
    listData:ListItemProps[],
    index:number
    onCloseCarousel:()=>void
}