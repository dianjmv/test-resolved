import {BaseGildedCreator} from "./BaseGildedCreator";
import {IBaseUpdate} from "../../services/BaseService";
import {DefaultService} from "../../services/DefaultService";

export class DefaultCreator extends BaseGildedCreator{
    public factoryMethod(): IBaseUpdate {
        return new DefaultService()
    }
}