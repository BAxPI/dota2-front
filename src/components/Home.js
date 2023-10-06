import React, { useEffect, useState } from "react";
import "../css/home.css";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users/me", {
                    headers: { Authorization: `Bearer ${auth?.accessToken}` },
                });
                console.log(response.data)
                setUserData(response.data); // Store the received data in state
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [auth]);

    return (
        <div className="content">
            {userData ? (
                <div className="container">
                    <h2>{userData.username} - Overview </h2>
                    <table>
                        <tbody>
                            <tr>
                                <td> Matches played</td>
                                <td>{userData.totalMatches}</td>
                            </tr>
                            <tr>
                                <td> Win/Loss Ratio</td>
                                <td> {userData.wlRatio}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default Home;
