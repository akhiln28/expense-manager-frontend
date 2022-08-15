import React, {useEffect, useState} from 'react'
import {ClientSafeProvider, getProviders, LiteralUnion, signIn, signOut, useSession} from "next-auth/react";
import {BuiltInProviderType} from "next-auth/providers";
import Router from 'next/router'

const Login = () => {
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider> | null>();

    const {data: session} = useSession();
    useEffect(() => {
        const setTheProviders = async () => {
            const providers = await getProviders();
            setProviders(providers);
        };
        setTheProviders();
    }, []);

    if (session && session.user) {
        Router.push("/home");
    }

    return (
        <div className="flex flex-row m-4 p-2 w-fit mx-auto bg-slate-100 rounded-xl shadow-md">
            <div className="p-4">You are not signed in</div>
            <button className={"p-2 m-1 bg-red-400 text-black rounded-md"}
                    onClick={() => signIn(providers?.google.id)}>Sign in with Google
            </button>
        </div>
    );

}

export default Login