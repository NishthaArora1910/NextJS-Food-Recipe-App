'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Grid } from '@mui/material';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

export default function TodoList() {
    const [suggestions, setSuggestions] = useState([]);
    const [newSuggestion, setNewSuggestion] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editedSuggestion, setEditedSuggestion] = useState('');

    const handleAddSuggestion = () => {
        if (newSuggestion.trim() !== '') {
            setSuggestions([...suggestions, newSuggestion]);
            setNewSuggestion('');
        }
    };

    const handleDeleteSuggestion = (index) => {
        const updatedSuggestions = suggestions.filter((_, i) => i !== index);
        setSuggestions(updatedSuggestions);
    };

    const handleEditSuggestion = (index) => {
        setEditIndex(index);
        setEditedSuggestion(suggestions[index]);
    };

    const handleUpdateSuggestion = () => {
        const updatedSuggestions = suggestions.map((suggestion, i) => (i === editIndex ? editedSuggestion : suggestion));
        setSuggestions(updatedSuggestions);
        setEditIndex(null);
        setEditedSuggestion('');
    };

    return (
        <div>
            <Typography variant="h4" style={{ fontWeight: "bold", color: "#054A5A", fontSize: "1.9rem" }}>
                Add suggestions for New Recipes Here.
            </Typography>
            
            <Link href={"/"}>
                <Typography variant="body1" style={{ fontWeight: "bold", fontSize: "1.2rem" }}> 
                    Click Here to Go Home 
                </Typography>
            </Link>
            
            <Grid container alignItems="center" justifyContent="center" style={{ marginTop: "20px" }}>
                <Grid item xs={8}>
                    <TextField 
                        type="text" 
                        value={newSuggestion} 
                        onChange={(e) => setNewSuggestion(e.target.value)} 
                        placeholder="Enter new recipe suggestion"
                        variant="outlined"
                        style={{ width: "100%", marginBottom: "10px" }}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained" 
                        onClick={handleAddSuggestion} 
                        style={{ fontWeight: "bold", fontSize: "1.3rem", backgroundColor: "black", color: "white", marginLeft: "10px" }}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
            
            <div style={{ marginLeft: '175px', marginTop: "20px" }}>
                <List>
                {suggestions.map((suggestion, index) => (
                    <ListItem key={index}>
                        {editIndex === index ? (
                            <TextField
                                value={editedSuggestion}
                                onChange={(e) => setEditedSuggestion(e.target.value)}
                                variant="outlined"
                                style={{ width: "70%", marginRight: "10px" }}
                            />
                        ) : (
                            <ListItemText primary={suggestion} />
                        )}
                        <ListItemSecondaryAction>
                            {editIndex === index ? (
                                <IconButton edge="end" aria-label="update" onClick={handleUpdateSuggestion}>
                                    <CheckIcon />
                                </IconButton>
                            ) : (
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEditSuggestion(index)}>
                                    <EditIcon />
                                </IconButton>
                            )}
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteSuggestion(index)}>
                                <DeleteOutline />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                </List>
            </div>
        </div>
    );
}
