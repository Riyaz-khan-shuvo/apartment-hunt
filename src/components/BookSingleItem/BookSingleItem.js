import React from "react";

const BookSingleItem = ({ item }) => {
    const { name, email, phone, message, status } = item;

    return (
        <tr>
            <td> {name} </td>
            <td> {email} </td>
            <td> {phone} </td>
            <td> {message} </td>
            <td>
                <select name="status">
                    <option
                        value=""
                        selected={status === "Pending" ? "selected" : ""}
                    >
                        Pending
                    </option>
                    <option
                        value=""
                        selected={status === "On Going" ? "selected" : ""}
                    >
                        On Going
                    </option>
                    <option
                        value=""
                        selected={status === "Done" ? "selected" : ""}
                    >
                        Done
                    </option>
                </select>
            </td>
        </tr>
    );
};

export default BookSingleItem;
