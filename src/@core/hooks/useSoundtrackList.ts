import axios from "axios"
import React from "react"

export interface ISoundTracks {
    id: number
    name: string
    artist: string
    year: Date
    time: Date
    city: string
    state: string
    country: string
}


export default function useSoundTrackList(props: ISoundTracks){
    const [soundtracks, setSoundTracks] = React.useState<ISoundTracks[]>([])

    React.useEffect(() => {
        const getSoundtracks = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5000/soundtrack",
            );
            setSoundTracks(response.data);
          } catch (error) {
            console.log("Erro ao buscar as trilhas sonoras: " + error);
          }
        };
    
        getSoundtracks();
      }, []);

    return {
        soundtracks
    }
}