import clientPromise from "@/app/lib/mongodb";

export async function GET(req) {
  const id = req.nextUrl.searchParams.get("id");
  const client = await clientPromise;
  const db = client.db("Next");

  try {
    let response;

    if (id) {
      const post = await db.collection("Posts").findOne({ id: +id });
      if (!post) {
        return new Response(JSON.stringify({ error: "Post not found" }), {
          status: 404,
        });
      }
      response = post;
    } else {
      const posts = await db.collection("Posts").find({}).toArray();
      response = posts;
    }

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
    });
  }
}

// POST request handler
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("Next");

  try {
    const { title, body } = await req.json();

    if (!title || !body) {
      return new Response(
        JSON.stringify({ error: "Title and body are required" }),
        { status: 400 }
      );
    }

    const newPost = {
      id: Date.now(),
      userId: 9,
      title,
      body,
    };

    await db.collection("Posts").insertOne(newPost);

    return new Response(
      JSON.stringify({ message: "Post added successfully", post: newPost }),
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to add post" }), {
      status: 500,
    });
  }
}
