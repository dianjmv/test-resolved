import {Item} from "../../models/ItemModel";
import {IBaseUpdate} from "../../services/BaseService";

export abstract class BaseGildedCreator {
    public abstract factoryMethod(): IBaseUpdate;
}
