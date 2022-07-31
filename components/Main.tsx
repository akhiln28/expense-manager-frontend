import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

export function Main() {
    return <div className="flex">
        <Sidebar/>
        <Content/>
    </div>;
}