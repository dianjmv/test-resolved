import {BaseUpdateService, IBaseUpdate} from "./BaseService";
import {Item} from "../models/ItemModel";

export class DefaultService extends BaseUpdateService implements IBaseUpdate{
    update(item: Item) {
        item = this.updateQualityItem(item)
        item.sellIn -= 1
        return item
    }
}