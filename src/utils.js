const paginate = (followers) => {
  const itemsPerPage = 8;
  const pages = Math.ceil(followers.length/ itemsPerPage);

  //The first thing we need to do when we set up a new array object is to specify the length, which in this case we are going to set it to our length object
  const newFollowers = Array.from({length: pages}, (_, index)=> {
    const start = index * itemsPerPage;
    return followers.slice(start,start + itemsPerPage)
  })

  return newFollowers;
}

export default paginate
