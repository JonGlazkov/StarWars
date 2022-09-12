export const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asd9has08fgdabgbandsandb010alnkdaldgndfbad09fad0fn',
        user: {
          name: 'Jonathan',
          email: 'jonathan_vmacedo@hotmail.com',
        },
      });
    }, 2000)
  })
}