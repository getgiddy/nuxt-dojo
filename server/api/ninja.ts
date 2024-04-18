export default defineEventHandler(async (event) => {
    // handle query params
    const { name } = getQuery(event);

    const { age } = await readBody(event);

    const { secret } = useRuntimeConfig();

    return {
        message: `Hello, ${name}. You are ${age} years old. The secret is ${secret}`
    }
});
