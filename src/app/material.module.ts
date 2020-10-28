import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatDividerModule, ],
  exports: [MatButtonModule, MatInputModule, MatDividerModule, ]
})
export class MaterialModule { }
