import { useState, useEffect, useContext } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuthContext } from "../../contexts/authcontext";
import { Logout } from "../../services/authservice";
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from "../../utils/ActiveLink";

//utils


const Navbar = () => {
	const { addToast } = useToasts();
	const [sticky, setSticky] = useState(false);
	const [keyword, setKeyword] = useState("");
	const user = useAuthContext();
	//sticky menu
	const showStickyMenu = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	if (typeof window !== "undefined") {
		// browser code
		window.addEventListener("scroll", showStickyMenu);
	}

	const [showMenu, setshowMenu] = useState(false);

	const toggleMenu = () => {
		setshowMenu(!showMenu);
	};

	useEffect(() => {
		let abortController = new AbortController();

		return () => {
			abortController.abort();
		};
	}, []);

	//navbar search
	const router = useRouter();

	const handleChange = (e) => {
		const { value } = e.target;
		setKeyword(value);
	};

	return (
		<>
			<div
				className=
				"body_overlay"

			></div>
			<div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
				<div className="miran-responsive-nav">
					<div className="container">
						<div className="miran-responsive-menu">
							<div
								onClick={() => toggleMenu()}
								className="hamburger-menu hamburger-two"
							>
								{showMenu ? (
									<i className="bx bx-x"></i>
								) : (
									<i className="bx bx-menu"></i>
								)}
							</div>
							<div className="logo">
								<Link href="/">
									<a>
										<Image
											src="/images/taazalogo.png"
											alt="logo"
											width={300}
											height={100}
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className={showMenu ? "miran-nav show" : "miran-nav"}>
					<div className="container-fluid">
						<nav className="navbar navbar-expand-md navbar-light">
							<Link href="/">
								<a className="navbar-brand">
									<Image
										src="/images/taazalogo.png"
										alt="logo"
										width={300}
										height={100}
									/>
								</a>
							</Link>
							<div className="collapse navbar-collapse mean-menu">

								<ul className="navbar-nav">
									<li className="nav-item">
										<Link href="/" activeClassName="active">
											<a className="dropdown-toggle nav-link">
												Home
											</a>
										</Link>
									</li>
									<li className="nav-item">
										<Link href="/" activeClassName="active">
											<a className="dropdown-toggle nav-link">
												Agent
											</a>
										</Link>
									</li>
									<li className="nav-item">
										<a
											href="#"
											className=" nav-link user-drop"
										>
											Land Details
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/land/addland"
													activeClassName="active"
												>
													<a className="nav-link">
														Add Land Details
													</a>
												</Link>
											</li>


										</ul>
									</li>

									<li className="nav-item">
										<a
											href="#"
											className=" nav-link user-drop"
										>
											Product
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/product/addproductcategory"
													activeClassName="active"
												>
													<a className="nav-link">
														Add Product Category
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/product/addproduct"
													activeClassName="active"
												>
													<a className="nav-link">
														Add Product
													</a>
												</Link>
											</li>

										</ul>
									</li>



									<li className="nav-item">
										<a
											href="#"
											className=" nav-link user-drop"
										>
											Product Inventory
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<Link
													href="/inventory/addfutureinventory"
													activeClassName="active"
												>
													<a className="nav-link">
														Add Future Inventory
													</a>
												</Link>
											</li>
											<li className="nav-item">
												<Link
													href="/inventory/addavailableinventory"
													activeClassName="active"
												>
													<a className="nav-link">
														Add Available Inventory
													</a>
												</Link>
											</li>

										</ul>
									</li>

								</ul>

								<div className="others-option d-flex align-items-center">
									<div className="option-item">

										<span
											className="auth-one"
											onClick={() => Logout()}
										>
											<i className="flaticon-user"></i>{" "}
											Logout
										</span>


									</div>

								</div>
							</div>
						</nav>
					</div>
				</div>

			</div>

		</>
	);
};

export default Navbar;
