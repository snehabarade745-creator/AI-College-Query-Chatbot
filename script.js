const panel=document.getElementById("chatPanel"),
 body=document.getElementById("chatBody");

function openChat()
{
    panel.classList.add("open");
    document.getElementById("question").focus()
}
function closeChat()
{
    panel.classList.remove("open")
}
function showInfo(title,text)
{
    document.getElementById("modalTitle").textContent=title;
    document.getElementById("modalText").textContent=text;
    document.getElementById("modal").classList.add("show")
}
function closeModal(e)
{
    
    if(!e||e.target.id==="modal"||e.target.classList.
        contains("modal-close"))
        document.getElementById("modal").
        classList.remove("show")
    }
function ask(topic)
{
    openChat();
     addUser(topic);
      setTimeout(()=>botReply(topic),350)
    }
function addUser(text)
{
    const d=document.createElement("div");
    d.style.cssText="background:#0874df;color:#fff;padding:10px 13px;border-radius:15px;margin:10px 0 10px auto;width:max-content;max-width:85%;font-size:13px";
    d.textContent=text;
    body.appendChild(d);
    body.scrollTop=body.scrollHeight
}
function addBot(text)
{
    const d=document.createElement("div");
    d.className="bot-msg";
    d.style.marginTop="8px";
    d.innerHTML=text;
    body.appendChild(d);
    body.scrollTop=body.scrollHeight
}
function botReply(q){
    const x=q.toLowerCase();
    let r="I can help with RCPIT college information. Try asking about admissions, departments, fees, hostel, placements or facilities.";
    if(x.includes("admission"))r="For admission, check your eligibility, course/branch availability and the latest admission schedule. This demo chatbot is ready to connect to your real college data.";
    
    else if(x.includes("fee"))r="Fees can be organized by course and category. Connect this demo to your official fee database/API for live amounts.";
    
    else if(x.includes("hostel"))r="Hostel information can include room types, mess, rules, availability and contact details.";
    else if(x.includes("placement"))r="Placement information can include recruiters, highest/average packages, internships and training support.";
    else if(x.includes("department"))r="Departments can list programs, faculty, labs and contact details.";
    else if(x.includes("facility"))r="Facilities can include laboratories, library, sports, transport and student services.";
    addBot(r)
}
function sendMessage(e){
    e.preventDefault();
    const input=document.getElementById("question");
    const q=input.value.trim();
    if(!q)return;addUser(q);
    input.value="";
    setTimeout(()=>botReply(q),350)
}
document.querySelectorAll("nav a")
.forEach(a=>a.addEventListener("click",()=>document
.querySelectorAll("nav a").forEach
(n=>n.classList.remove("active"))));