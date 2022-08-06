export default function Add() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            title: formData.get('title') as string,
            amount: formData.get('amount') as string,
            date: formData.get('date') as string,
            category: formData.get('category') as string,
            description: formData.get('description') as string,
            payee: formData.get('payee') as string,
            rating: formData.get('rating') as string,
            account: formData.get('account') as string,
        };
        console.log(data);
        const apiUrl = 'https://pro-expense-manager.herokuapp.com/expense/';
        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        try {
            const res = await fetch(apiUrl, options);
            const json = await res.json();
            console.log(json);
        }
        catch (err) {
            console.log(data);
            alert(err);
        }
    }
    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <input type="text" placeholder="Title"
                           required={true}
                           minLength={3}
                           id={'title'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="number" placeholder="Amount"
                           required={true}
                           min={0}
                           id={'amount'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Category"
                           required={true}
                           minLength={3}
                           id={'category'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="datetime-local" placeholder="Date"
                           required={true}
                           id={'date'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Description"
                           required={true}
                           minLength={3}
                           id={'description'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type="text" placeholder="Payee"
                           required={true}
                           minLength={3}
                           id={'payee'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type={'number'} placeholder={'Rating'}
                           required={true}
                           min={1}
                           max={10}
                           id={'rating'}
                           className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <input type={'text'} placeholder={'Account'}
                            required={true}
                            minLength={3}
                            id={'account'}
                            className="m-4 p-2 ml-8 bg-green-50 border-2 border-slate-400 rounded-md"/>
                    <button type={'submit'} className={'p-2 m-auto w-32 bg-sky-200 rounded-2xl'}>Submit</button>
                </div>
            </form>
        </div>
    )
}