import {AgedBrieCreator} from "./AgedBrieCreator";
import {IBaseUpdate} from "../../services/BaseService";
import {DefaultService} from "../../services/DefaultService";
import {SulfurasService} from "../../services/SulfurasService";

export class SulfurasCreator extends AgedBrieCreator{
    public factoryMethod(): IBaseUpdate {
        return new SulfurasService()
    }
}