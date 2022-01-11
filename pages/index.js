import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { useAuthContext } from "../contexts/authcontext";
import AuthorizedContent from "../components/Shared/authorizedcontent";



const Dashboard = () => {

	const user = useAuthContext();

	const router = useRouter();

	useEffect(() => {
		if (!user) {
			router.push('/auth');
		}
	}, [user])

	return (
		<AuthorizedContent>
			<Navbar />
			<div className="main-content d-flex flex-column">
				<div className="breadcrumb-area">
					<h1>Howdy, Admin!</h1>
				</div>

				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="stats-card-box">
							<div className="icon-box">
								<i className="bx bx-map-alt"></i>
							</div>
							<span className="sub-title">Agent</span>
							<h3>10</h3>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="stats-card-box">
							<div className="icon-box">
								<i className="bx bx-line-chart"></i>
							</div>
							<span className="sub-title">Product</span>
							<h3>10</h3>
						</div>
					</div>	
				</div>

			
				<div className="flex-grow-1"></div>

				<div className="copyrights-area">
					<div className="row align-items-center">
						<div className="col-lg-6 col-sm-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i>2020{" "}
								<a href="#">Organic Fresco</a>. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</AuthorizedContent>
	);
};

export default Dashboard;
