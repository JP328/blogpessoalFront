/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import CardPostagem from "../cardPostagem/CardPostagem";
import { useContext, useEffect, useState } from "react";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { ProgressBar } from "react-loader-spinner";

function ListaPostagens() {

  const navigate = useNavigate();
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

  async function buscarPostagens() {
      try {
          await buscar('/postagens', setPostagens, {
              headers: {
                  Authorization: token,
              },
          })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
          if (error.toString().includes('403')) {
              alert('O token expirou, favor logar novamente')
              handleLogout()
          }
      }
  }

  useEffect(() => {
    if (token === '') {
        alert('Você precisa estar logado')
        navigate('/');
    }
  }, [token])

  useEffect(() => {
      buscarPostagens()
  }, [postagens.length])

  return (
        <>
            {postagens.length === 0 && (
                <ProgressBar
                    visible={true}
                    height="200"
                    width="700"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    barColor="rgb(49 46 129)"
                    borderColor="transparent"
                    wrapperClass="progress-bar-wrapper mx-auto"
                />
            )}

            <div className='container mx-auto my-4 
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {postagens.map((postagem: Postagem) => (
                    <CardPostagem key={postagem.id} post={postagem} />
                ))}

            </div>
        </>
    );
}

export default ListaPostagens;