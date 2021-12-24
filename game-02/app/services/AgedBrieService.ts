import {BaseUpdateService, IBaseUpdate} from "./BaseService";
import {Item} from "../models/ItemModel";

export class AgedBrieService extends BaseUpdateService implements IBaseUpdate{
    update(item: Item) {
        item.quality = this.increaseQuality(item.quality)
        item.quality = item.sellIn < 0 ? this.increaseQuality(item.quality) : item.quality
        item.sellIn -= 1;
        return item
    }
}