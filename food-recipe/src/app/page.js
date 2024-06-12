import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", 
      height: "100vh" }}>
      <h1 style={{ fontWeight: "bold", color: "054A5A",fontSize: "3rem" }}>
        Welcome to Food Recipe Application!
      </h1>
      <h3 style={{ fontWeight: "bold", color: "#0B697E", marginTop: "20px", fontSize: "1.2rem" }}>
        This is your ultimate destination for discovering mouthwatering recipes
        from around the world. Whether you're a seasoned chef or just starting
        your culinary journey, we have something for everyone.
      </h3>
      <Link href={"/recipe-list"}>
        <div style={{ fontWeight: "bold", color: "#c30e22", fontSize: "1.3rem", marginTop: "20px" }}>
          Click here to Explore Recipes
        </div>
      </Link>
      <Link href={"/todo-list"}>
        <div style={{ fontWeight: "bold", color: "#c30e22", fontSize: "1.3rem", marginTop: "20px" }}>
          Click here to Add New Recipe Suggestions 
        </div>
      </Link>
      
    </div>
  );
}

