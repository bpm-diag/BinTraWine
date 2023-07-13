type NavbarProps = {
    filiera: string[];
};

const Navbar = (props: NavbarProps) => {

    return (
        <div className="grid-in-nav bg-nord15-light">
            <div className="w-full flex flex-col gap-7 items-center">
                {
                    props.filiera.map((item) => {
                        return (
                            <div className="rounded-xl hover:bg-slate-50 hover:underline cursor-pointer px-4 py-2">
                                <p className="font-mono text-lg">
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Navbar;