const getPackageReveiws = async (id: number, pageParam: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/packages/${id}/list?page=${pageParam}`,
      {
        cache: "no-store",
      },
    );

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPackageReveiws;
