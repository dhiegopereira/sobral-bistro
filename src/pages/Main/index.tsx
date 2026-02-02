function Main() {
  const infos = [
    {
      title: 'Cardápio Digital',
      link: 'https://pedido.anota.ai/loja/sobral-bistro-burguer?f=msa',
      icon: 'https://cdn-icons-png.flaticon.com/128/878/878052.png',
    },
    {
      title: 'Localização',
      link: 'https://maps.app.goo.gl/4JdqEtj8aKx7wtUx7',
      icon: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    },
  ]

  const icons = [
    {
      src: 'https://cdn-icons-png.flaticon.com/128/733/733585.png',
      alt: 'Whatsapp',
      href: 'https://wa.me/5588997100118?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20lanche',
    },
    {
      src: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
      alt: 'Instagram',
      href: 'https://www.instagram.com/sobralbistro/',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      {/* Logo e título */}
      <div className="flex flex-col items-center">
        <img
          src="./logo.jpg"
          alt="Perfil"
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h2 className="text-2xl font-bold mt-4">Sobral Bistrô</h2>
        <p className="text-gray-600">Petiscos e Hambúrguer</p>
      </div>

      {/* Botões principais */}
      <div className="mt-6 w-full max-w-xs space-y-4">
        {infos.map((info) => (
          <a
            key={info.title}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 bg-white border border-gray-300 rounded-xl shadow-md py-3 px-6 hover:bg-gray-200 transition-all"
          >
            <img src={info.icon} alt={info.title} className="w-8 h-8" />
            <span className="text-lg font-semibold">{info.title}</span>
          </a>
        ))}
      </div>

      {/* Redes sociais */}
      <div className="flex space-x-6 mt-10">
        {icons.map((icon) => (
          <a
            key={icon.href}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Main
