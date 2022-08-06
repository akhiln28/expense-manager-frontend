import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

export function Main() {
    return <div className="flex w-screen">
        <Sidebar/>
        <Content/>
    </div>;
}