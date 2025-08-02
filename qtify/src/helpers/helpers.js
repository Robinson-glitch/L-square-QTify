
export function truncate(artists,maxcharacter){

  return  artists.length>maxcharacter?artists.slice(0,maxcharacter-3)+"...":artists;
}
