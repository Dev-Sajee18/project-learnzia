import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";

const PaymentList = () => {
    const [payments, setPayments] = useState([]);
    const userEmail = "sajsajee18@gmail.com"; // Replace with the user's email address

    useEffect(() => {
        fetch(`http://localhost:3002/api/payment/payments/${userEmail}`)
            .then((res) => res.json())
            .then((data) => {
                setPayments(data.data);
            })
            .catch((err) => console.error(err));
    }, [userEmail]);

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Payments for {userEmail}</h1>
            <ListGroup>
                {payments.map((payment) => (
                    <ListGroup.Item key={payment.id} className="d-flex justify-content-between align-items-center">
                        <span>Amount: {payment.amount} {payment.currency.toUpperCase()}</span>
                        {/* Assuming there is a status property in payment */}
                        <span className={`badge ${payment.status === "Paid" ? "bg-success" : "bg-warning"}`}>{payment.status}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default PaymentList;

