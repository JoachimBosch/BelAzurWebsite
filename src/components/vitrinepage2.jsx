import React, { useState, useContext } from 'react';
import MyContext from '../context/context';
import { Link } from 'react-router-dom';

const VitrinePage2 = () => {
    const {vitrineBuild, setVitrineBuild, file, setFile} = useContext(MyContext)

    function saveImage(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
  } 

    console.log(vitrineBuild)
    return (
        <>
            <div className="mx-auto mt-28" style={{ maxWidth: "1280px" }}>
                <h2 className="text-xl font-bold mb-4">Now, some content:</h2>
                <div className="flex flex-col">
                    <label for="logo">Upload your logo: </label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        name="logo"
                        onChange={(e) => {
                            saveImage;
                            setVitrineBuild({
                                ...vitrineBuild,
                                logo: file,
                            });
                        }}
                    />
                    <label for="title">Title: </label>
                    <input
                        type="text"
                        name="title"
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                title: e.target.value,
                            })
                        }
                    />
                    <label for="subtext">Subtitle </label>
                    <input
                        type="text"
                        name="subtext"
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                subtitle: e.target.value,
                            })
                        }
                    />
                    <label for="logo">Upload an image: </label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        name="logo"
                        onChange={(e) => {
                            saveImage;
                            setVitrineBuild({
                                ...vitrineBuild,
                                img1_url: file,
                            });
                        }}
                    />
                    <label for="header">Image text</label>
                    <textarea
                        type="text"
                        name="header"
                        value={vitrineBuild.img1_text}
                        onChange={(e) =>
                            setVitrineBuild({
                                ...vitrineBuild,
                                img1_text: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <Link to="/services/vitrine/build/3">
                        <button>Next page</button>
                    </Link>
                    <Link to="/services/vitrine/build/1">
                        <button>Previous page</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VitrinePage2;