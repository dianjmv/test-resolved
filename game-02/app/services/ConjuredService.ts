import {BaseUpdateService, IBaseUpdate} from "./BaseService";
import {Item} from "../models/ItemModel";

export class ConjuredService extends BaseUpdateService implements IBaseUpdate{
    update(item:Item){
        if (item.sellIn === 5) {
            item.quality -= 3
        } else {
            item = this.updateQualityItem(item)
            item = this.updateQualityItem(item)
        }
        item.sellIn -= 1
        return item
    }
}