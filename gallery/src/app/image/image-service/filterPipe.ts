import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {

transform(items: any[], criteria: string): any {
    if(criteria ==='all')
    {
        console.log("criteria==all");
        return items
    }else
    {
        console.log("criteria=="+criteria);
        return items.filter(item=>{
            return item.category===criteria;
            
        });
    }
}
}
