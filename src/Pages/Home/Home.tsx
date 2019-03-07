import * as React from 'react';

export default function Home() {
	return (
		<div className="container pt-3 pb-3" style={{background: 'white', boxShadow: '0 3px 6px gray'}}>
			<div className="row d-flex justify-content-center">
				<div className="col-lg-6">
					<h2 className="display-5 d-flex justify-content-center">
						Schedule of Services
					</h2>
					<table className="table">
						<tbody className="">
							<tr className="">
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-start">
										Sunday Morning Bible Class
									</div>
								</td>
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-end">
										9:30 AM
									</div>
								</td>
							</tr>
							<tr className="">
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-start">
										Sunday Morning Worship
									</div>
								</td>
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-end">
										10:30 AM
									</div>
								</td>
							</tr>
							<tr className="">
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-start">
										Sunday Evening Worship
									</div>
								</td>
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-end">
										6:00 PM
									</div>
								</td>
							</tr>
							<tr className="">
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-start">
										Wednesday Bible Class
									</div>
								</td>
								<td className="border font-weight-bold">
									<div className="d-flex justify-content-end">
										7:00 PM
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="row mt-3 d-flex justify-content-center">
				<div className="col-lg-8">
					<h2 className="display-5 d-flex justify-content-center">Mission Statement</h2>
					<hr />
					<div className="container-fluid">
						<div className="row">
							<p className="text-left">
								We believe that God created the earth and placed man in it as stated in the Bible.
								We believe the Bible is His word and it is to be read, studied, and accepted as His word
								with no additional works of men needed to alter it. We believe that man was created in
								the image of God and placed here to worship God and follow the teachings of His Son,
								Jesus Christ who died for our sins.
							</p>
						</div>
						<div className="row">
							<p className="">
								As followers of Christ, we believe that His word, the Bible, is the final authority
								in all things pertaining to religion. Our mission is to teach only the gospel as proclaimed in the
								scriptures and to follow those teachings. We believe there is
								<span className="ml-1 font-italic">
									"one body, one Lord, one faith, one baptism, one God and Father of all..."
								</span>
							</p>
						</div>
						<div className="row d-flex justify-content-start">
							<p className="font-weight-bold">Ephesians 4:4-6</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}