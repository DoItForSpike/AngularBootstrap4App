import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CenteredContainerComponent } from "./centered-container/centered-container.component";

const routes: Routes = [
    {
        path:      "centeredcontainer",
        component: CenteredContainerComponent
    },
    // Default route
    {
        path:       "",
        redirectTo: "centeredcontainer",
        pathMatch:  "full"
    },
    // 404 route
    // {
    //     path: "**",
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
