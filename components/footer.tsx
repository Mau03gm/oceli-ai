"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Oceli</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Fábrica de software impulsada con "}
              <span className="text-accent font-semibold">{"AI"}</span>
              {". Transformando ideas en soluciones digitales."}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">{"Enlaces"}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {"Inicio"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("casos-de-uso")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {"Casos de Uso"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contacto")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {"Contacto"}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">{"Contacto"}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:gomez.oceli@gmail.com" className="hover:text-accent transition-colors">
                  {"gomez.oceli@gmail.com"}
                </a>
              </li>
              <li>
                <a href="tel:+525512345678" className="hover:text-accent transition-colors">
                  {"+52 55 1234 5678"}
                </a>
              </li>
              <li>{"Ciudad de México, México"}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            {"© "}
            {new Date().getFullYear()}
            {" Oceli. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
