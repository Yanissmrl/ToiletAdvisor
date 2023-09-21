import "../../styles/Footer.css";
import {Link} from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <footer className="mt-48 mb-52 flex justify-center ">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div>
                            <div>
                                <h1 className="color-main-orange">NOUS CONNAITRE</h1>
                            </div>
                            <div>
                                <div className="max-w-2xl">
                                    <p>Visitez nos réseaux sociaux ou nous partageons tous les meilleurs bon plans. Vous pouvez également nous laisser une petite review ! </p>
                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                                <div className="drop-shadow-number mb-10 bg-main-grey h-auto w-auto rounded-full p-4">
                                    <svg className="h-5	w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 24" fill="none">
                                        <path d="M2.37831 4.58794V7.84995H0V11.8384H2.37831V23.6923H7.26012V11.8396H10.5371C10.5371 11.8396 10.8441 9.92729 10.9929 7.83571H7.28019V5.10787C7.28019 4.70071 7.81159 4.1523 8.33827 4.1523H11V0H7.38175C2.25668 0 2.37831 3.99205 2.37831 4.58794Z" fill="#FEFEFE" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to="https://www.youtube.com/watch?v=Wjavakm7gMQ&ab_channel=ArcadeAssassin">
                                <div className=" ml-4 drop-shadow-number mb-10 bg-main-grey h-auto w-auto rounded-full p-4">
                                    <svg className="h-5	w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M6.96 0H17.04C20.88 0 24 3.25 24 7.25V17.75C24 19.6728 23.2667 21.5169 21.9615 22.8765C20.6562 24.2362 18.8859 25 17.04 25H6.96C3.12 25 0 21.75 0 17.75V7.25C0 5.32718 0.733284 3.48311 2.03854 2.12348C3.34379 0.763837 5.11409 0 6.96 0ZM6.72 2.5C5.57427 2.5 4.47546 2.97411 3.6653 3.81802C2.85514 4.66193 2.4 5.80653 2.4 7V18C2.4 20.4875 4.332 22.5 6.72 22.5H17.28C18.4257 22.5 19.5245 22.0259 20.3347 21.182C21.1449 20.3381 21.6 19.1935 21.6 18V7C21.6 4.5125 19.668 2.5 17.28 2.5H6.72ZM18.3 4.375C18.6978 4.375 19.0794 4.53962 19.3607 4.83265C19.642 5.12567 19.8 5.5231 19.8 5.9375C19.8 6.3519 19.642 6.74933 19.3607 7.04235C19.0794 7.33538 18.6978 7.5 18.3 7.5C17.9022 7.5 17.5206 7.33538 17.2393 7.04235C16.958 6.74933 16.8 6.3519 16.8 5.9375C16.8 5.5231 16.958 5.12567 17.2393 4.83265C17.5206 4.53962 17.9022 4.375 18.3 4.375ZM12 6.25C13.5913 6.25 15.1174 6.90848 16.2426 8.08058C17.3679 9.25268 18 10.8424 18 12.5C18 14.1576 17.3679 15.7473 16.2426 16.9194C15.1174 18.0915 13.5913 18.75 12 18.75C10.4087 18.75 8.88258 18.0915 7.75736 16.9194C6.63214 15.7473 6 14.1576 6 12.5C6 10.8424 6.63214 9.25268 7.75736 8.08058C8.88258 6.90848 10.4087 6.25 12 6.25ZM12 8.75C11.0452 8.75 10.1295 9.14509 9.45442 9.84835C8.77928 10.5516 8.4 11.5054 8.4 12.5C8.4 13.4946 8.77928 14.4484 9.45442 15.1517C10.1295 15.8549 11.0452 16.25 12 16.25C12.9548 16.25 13.8705 15.8549 14.5456 15.1517C15.2207 14.4484 15.6 13.4946 15.6 12.5C15.6 11.5054 15.2207 10.5516 14.5456 9.84835C13.8705 9.14509 12.9548 8.75 12 8.75Z" fill="#FEFEFE" />
                                    </svg>
                                </div>
                            </Link>
                            <Link to="https://www.youtube.com/watch?v=ZBLEkoWgQPE&ab_channel=MemeZee">
                                <div className="ml-4 drop-shadow-number mb-10 bg-main-grey h-auto w-auto rounded-full p-4">
                                    <svg className="h-5	w-5" xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54335 8.3628H12.8144V10.5828C13.4297 9.306 15.0075 8.1588 17.3776 8.1588C21.9213 8.1588 23 10.7004 23 15.3636V24H18.4V16.4256C18.4 13.77 17.7847 12.2724 16.2185 12.2724C14.0461 12.2724 13.1433 13.8864 13.1433 16.4244V24H8.54335V8.3628ZM0.6555 23.796H5.2555V8.1588H0.6555V23.796ZM5.91445 3.06C5.91462 3.46233 5.83815 3.86068 5.6895 4.2319C5.54084 4.60313 5.32295 4.93982 5.0485 5.2224C4.49236 5.79915 3.73958 6.12198 2.9555 6.12C2.1728 6.11945 1.42176 5.79744 0.8648 5.2236C0.591343 4.94006 0.374194 4.60299 0.225795 4.23172C0.0773967 3.86045 0.000666002 3.46227 0 3.06C0 2.2476 0.3105 1.47 0.86595 0.8964C1.42242 0.32179 2.17378 -0.000359053 2.95665 3.00317e-07C3.74095 3.00317e-07 4.49305 0.3228 5.0485 0.8964C5.6028 1.47 5.91445 2.2476 5.91445 3.06Z" fill="#FEFEFE" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}