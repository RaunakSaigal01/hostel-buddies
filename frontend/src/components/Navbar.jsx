function Navbar({onSelectBlock,onGoHome,selectedBlockId,onLogout}){
    const blocks = [
   { id: 1, name: "ALBERT EINSTEIN", letter: "A", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "60%", Dhobi: "N/A", RoomClean: "75%"},
    { id: 2, name: "RABINDRANATH TAGORE", letter: "C", AC1: 0, NAC1: 0, AC2: 0, NAC2: 102, AC3: 0, NAC3: 0, AC4: 0, NAC4: 15, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "25%", Dhobi: "N/A", RoomClean: "40%" },
    { id: 3, name: "NELSON MANDELA", letter: "D", AC1: 87, NAC1: 78, AC2: 0, NAC2: 0, AC3: 0, NAC3: 0, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "75%", Washroom: "75%", Dhobi: "N/A", RoomClean: "69%" },
    { id: 4, name: "CV RAMAN", letter: "E", AC1: 0, NAC1: 0, AC2: 0, NAC2: 225, AC3: 0, NAC3: 0, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "80%", Dhobi: "N/A", RoomClean: "70%" },
    { id: 5, name: "RAMANUJAN", letter: "F", AC1: 0, NAC1: 0, AC2: 208, NAC2: 0, AC3: 0, NAC3: 0, AC4: 11, NAC4: 0, AC6: 148, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "60%", Washroom: "70%", Dhobi: "N/A", RoomClean: "50%" },
    { id: 6, name: "SOCRATES", letter: "G", AC1: 83, NAC1: 107, AC2: 0, NAC2: 0, AC3: 0, NAC3: 0, AC4: 53, NAC4: 160, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ Good Location ⁕", Mess: "75%", Washroom: "90%", Dhobi: "85%", RoomClean: "100%" },
    { id: 7, name: "JOHN F KENNEDY", letter: "H", AC1: 202, NAC1: 120, AC2: 0, NAC2: 0, AC3: 0, NAC3: 184, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "60%", Dhobi: "N/A", RoomClean: "100%" },
    { id: 8, name: "JOHN F KENNEDY", letter: "J", AC1: 202, NAC1: 120, AC2: 0, NAC2: 0, AC3: 0, NAC3: 184, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "60%", Dhobi: "N/A", RoomClean: "75%" },
    { id: 9, name: "S.RADHAKRISHNAN ", letter: "K", AC1: 0, NAC1: 0, AC2: 0, NAC2: 0, AC3: 0, NAC3: 0, AC4: 50, NAC4: 0, AC6: 251, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "1 Badminton Court", Mess: "80%", Washroom: "70%", Dhobi: "N/A", RoomClean: "80%" },
    { id: 10, name: "SUBHASH CHANDRA", letter: "L", AC1: 0, NAC1: 0, AC2: 323, NAC2: 6, AC3: 14, NAC3: 0, AC4: 35, NAC4: 0, AC6: 150, NAC6: 0, AC8: 0, NAC8: 0, Facilities: " ⁕ Scenic View  ⁕ 1 Badminton Court ⁕", Mess: "95%", Washroom: "90%", Dhobi: "85%", RoomClean: "85%" ,SecretAC6:"Rooms 545,645,745,845 have an attached washroom",SecretAC2:"Rooms from 6th floor onwards ending with 10 till 30 have scenic view plus partial view of riviera"},
    { id: 11, name: "QUAID-E-MILLAT", letter: "M", AC1: 0, NAC1: 0, AC2: 138, NAC2: 0, AC3: 196, NAC3: 0, AC4: 0, NAC4: 0, AC6: 84, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 1 Badminton Court ⁕", Mess: "95%", Washroom: "90%", Dhobi: "85%", RoomClean: "85%" },
    { id: 12, name: "CHARLES DARWIN", letter: "N", AC1: 0, NAC1: 0, AC2: 190, NAC2: 0, AC3: 229, NAC3: 0, AC4: 0, NAC4: 0, AC6: 72, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "65%", Washroom: "65%", Dhobi: "85%", RoomClean: "55%" },
    { id: 13, name: "SARDAR PATEL", letter: "P", AC1: 0, NAC1: 0, AC2: 0, NAC2: 27, AC3: 0, NAC3: 0, AC4: 0, NAC4: 166, AC6: 0, NAC6: 164, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "90%", Washroom: "80%", Dhobi: "80%", RoomClean: "85%" },
    { id: 15, name: "MUTHAMIZH ARIGNAR", letter: "R", AC1: 0, NAC1: 0, AC2: 78, NAC2: 0, AC3: 161, NAC3: 0, AC4: 183, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "55%", Washroom: "90%", Dhobi: "N/A", RoomClean: "85%" },
    { id: 16, name: "A.P.J ABDUL KALAM", letter: "S", AC1: 0, NAC1: 0, AC2: 251, NAC2: 0, AC3: 105, NAC3: 0, AC4: 345, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "75%", Dhobi: "80%", RoomClean: "85%" ,SecretAC4:"Rooms ending with 34 and 28 are 1.5 times bigger than the rest"},
    { id: 17, name: "JAGDISH CHANDRA BOSE", letter: "T", AC1: 0, NAC1: 0, AC2: 254, NAC2: 0, AC3: 104, NAC3: 0, AC4: 345, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "85%", Washroom: "75%", Dhobi: "80%", RoomClean: "85%" , SecretAC4:"Rooms ending with 27 and 18 are 1.5 times bigger than the rest"},
  ];
    return (
    <nav className="navbar" data-aos="fade-up">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Hostel Buddy</span>
        </div>
        <div className="nav-menu" id="nav-menu">
          <button onClick={onGoHome} className="nav-link">Home</button>
          <a href="#about" className="nav-link" id="blocks">Blocks</a>
          <div className="dropdown-container">
            &nbsp; 
            <select
              id="myDropdown"
              value={selectedBlockId || ""}   // ✅ use ID
              onChange={(e) => {
                const block = blocks.find(b => b.id === Number(e.target.value));
                if (block) onSelectBlock(block);
              }}
            >
              <option value="" disabled>▼</option>
              {blocks.map((block) => (
                <option key={block.id} value={block.id}>
                  {block.letter} {/* still shows letter, but value = id */}
                </option>
              ))}
            </select>
          </div>&nbsp;&nbsp;
          <button onClick={onGoHome} className="nav-link">Predictor</button>&nbsp;
          <a href="#contact" className="nav-link">Contact</a> &nbsp; &nbsp;
           <button 
          onClick={onLogout} 
          className="nav-link"
        >
          Logout
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;