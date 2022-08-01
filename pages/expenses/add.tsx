export default function Add() {
    return (
        <div className="flex flex-col">
            <form >
                <div className="flex flex-col">
                    <label className="m-4 p-2 bg-green-200 rounded-md">
                        <span className="">Title</span>
                        <input type="text" className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md" />
                    </label>
                    <label className="m-4 p-2 bg-green-200 rounded-md">
                        Amount
                        <input type="text" className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md" />
                    </label>
                    <label className="m-4 p-2 bg-green-200 rounded-md">
                        Category
                        <input type="text" className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md" />
                    </label>
                </div>
            </form>
        </div>
    )
}