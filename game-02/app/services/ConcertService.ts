import {IBaseUpdate, BaseUpdateService} from "./BaseService";
import {Item} from "../models/ItemModel";

export class ConcertService extends BaseUpdateService implements IBaseUpdate {
    update(item:Item){
        item.quality = item.sellIn === 0 ? 0 : this.increaseQualityForConcert(item);
        item.sellIn -= 1
        return item;
    }

}