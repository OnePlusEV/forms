import { Validators } from "@angular/forms";
import { EControlType } from "./control-type";

interface IControl {
  type: EControlType,
  name: string,
  label: string,
  validations: Validators,
  classes: string,
}
