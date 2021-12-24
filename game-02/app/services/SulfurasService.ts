import {BaseUpdateService, IBaseUpdate} from "./BaseService";
import {Item} from "../models/ItemModel";

export class SulfurasService extends BaseUpdateService implements IBaseUpdate{
    update(item: Item) {
        item.quality = 80;
        return item
    }
}