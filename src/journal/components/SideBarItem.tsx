import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Note } from "../../types/types";
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal";
import { useAppDispatch } from "../../hooks";

interface Props {
  note: Note
}

export default function SideBarItem({ note }: Props) {

  const dispatch = useAppDispatch();

  const newTitle = useMemo(() => {
    return note.title.length > 17
      ? note.title.substring(0, 17) + '...'
      : note.title
  }, [note.title])

  const onActiveNote = () => {
    dispatch(setActiveNote(note))
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
