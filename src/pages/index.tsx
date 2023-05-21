import useSoundTrackList, { ISoundTracks } from '@/@core/hooks/useSoundtrackList';
import { Box, Button, Card, CardContent, CardHeader, CircularProgress, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
export default function SoundTrack(props: ISoundTracks) {

    const {
        soundtracks
    } = useSoundTrackList(props)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} margin={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Artista</TableCell>
                                <TableCell>Ano</TableCell>
                                <TableCell>Cidade</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>País</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {soundtracks.map((soundtrack) => (
                                <TableRow key={soundtrack.id}>
                                    <TableCell>{soundtrack.name}</TableCell>
                                    <TableCell>{soundtrack.artist}</TableCell>
                                    <TableCell>{soundtrack.year?.toString()}</TableCell>
                                    <TableCell>{soundtrack.city}</TableCell>
                                    <TableCell>{soundtrack.state}</TableCell>
                                    <TableCell>{soundtrack.country}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}