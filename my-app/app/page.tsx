import styles from "@/app/ui/home.module.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={styles.shape}></div>
      <h1>Product Feedback Here</h1>
    </main>
  );
}
