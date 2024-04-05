import React from "react";
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"; // Import Material-UI components

const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <h2>Contacts</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell>{contact.firstName}</TableCell>
                            <TableCell>{contact.lastName}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>
                                <Button variant="contained" onClick={() => updateContact(contact)}>Update</Button>
                                <Button variant="contained" color="error" onClick={() => onDelete(contact.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ContactList;
